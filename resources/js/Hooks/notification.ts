import { VariantType, useSnackbar } from 'notistack';

export default function useNotificataion() {
  const { enqueueSnackbar } = useSnackbar();

  const notify = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return notify;
}
