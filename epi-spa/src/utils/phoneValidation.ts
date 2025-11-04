import {
  parsePhoneNumberFromString,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
  validatePhoneNumberLength,
  AsYouType,
  CountryCode,
} from 'libphonenumber-js';

export interface PhoneValidationResult {
  isValid: boolean;
  message: string;
  formatted?: string;
  country?: string;
}

export const validatePhoneNumber = (
  phone: string,
  defaultCountry: CountryCode = 'IN'
): PhoneValidationResult => {
  const cleanPhone = phone.trim();

  if (!cleanPhone) {
    return { isValid: false, message: 'Phone number is required' };
  }

  try {
    const phoneNumber = parsePhoneNumberFromString(cleanPhone, defaultCountry);

    if (!phoneNumber) {
      return { isValid: false, message: 'Invalid phone number format' };
    }

    if (!phoneNumber.isPossible()) {
      const lengthResult = validatePhoneNumberLength(
        cleanPhone,
        defaultCountry
      );
      switch (lengthResult) {
        case 'TOO_SHORT':
          return { isValid: false, message: 'Phone number is too short' };
        case 'TOO_LONG':
          return { isValid: false, message: 'Phone number is too long' };
        case 'INVALID_LENGTH':
          return { isValid: false, message: 'Invalid phone number length' };
        default:
          return { isValid: false, message: 'Invalid phone number' };
      }
    }

    if (!phoneNumber.isValid()) {
      return { isValid: false, message: 'Invalid phone number' };
    }

    if (phoneNumber.country === 'IN') {
      const nationalNumber = phoneNumber.nationalNumber;
      if (!/^[6-9]/.test(nationalNumber)) {
        return {
          isValid: false,
          message: 'Indian mobile numbers should start with 6, 7, 8, or 9',
        };
      }
    }

    return {
      isValid: true,
      message: '',
      formatted: phoneNumber.formatInternational(),
      country: phoneNumber.country,
    };
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Invalid phone number format';
    console.warn('Phone validation error:', errorMessage);
    return { isValid: false, message: 'Invalid phone number format' };
  }
};

export const formatPhoneAsYouType = (
  phone: string,
  defaultCountry: CountryCode = 'IN'
): string => {
  try {
    const formatter = new AsYouType(defaultCountry);
    return formatter.input(phone);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Formatting error';
    console.warn('Phone formatting error:', errorMessage);
    return phone;
  }
};

export const isValidPhone = (
  phone: string,
  defaultCountry: CountryCode = 'IN'
): boolean => {
  try {
    return isValidPhoneNumber(phone, defaultCountry);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Validation error';
    console.warn('Phone validation error:', errorMessage);
    return false;
  }
};

export const isPossiblePhone = (
  phone: string,
  defaultCountry: CountryCode = 'IN'
): boolean => {
  try {
    return isPossiblePhoneNumber(phone, defaultCountry);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Possibility check error';
    console.warn('Phone possibility check error:', errorMessage);
    return false;
  }
};

export const getCleanPhoneNumber = (
  phone: string,
  defaultCountry: CountryCode = 'IN'
): string | null => {
  try {
    const phoneNumber = parsePhoneNumberFromString(phone, defaultCountry);
    return phoneNumber?.number || null;
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Clean phone error';
    console.warn('Phone cleaning error:', errorMessage);
    return null;
  }
};
