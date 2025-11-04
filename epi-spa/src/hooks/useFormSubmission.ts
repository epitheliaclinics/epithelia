import { ContactFormData } from '../components/ContactForm';
import { useToast } from '../components/ToastProvider';

export const useFormSubmission = (
  onSubmit?: (data: ContactFormData) => Promise<void>,
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const { showToast } = useToast();

  const defaultSubmitHandler = async (data: ContactFormData): Promise<void> => {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error('Failed to send message.');
    }
  };

  const handleSubmitLogic = async (
    data: ContactFormData,
    showSuccessAndReset: () => void,
    setLoading: (loading: boolean) => void
  ): Promise<void> => {
    setLoading(true);

    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        await defaultSubmitHandler(data);
        showToast('Consultation request sent!', 'success');
        onSuccess?.();
      }
      showSuccessAndReset();
    } catch (error) {
      const errorMsg = onSubmit
        ? 'Something went wrong!'
        : 'Failed to send message.';
      showToast(errorMsg, 'error');
      onError?.(errorMsg);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmitLogic };
};
