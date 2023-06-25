import { VariantType, useSnackbar } from 'notistack';

export default function useNotification() {
  const { enqueueSnackbar } = useSnackbar();

  const notify = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return notify;
}
