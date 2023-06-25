import React, { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import useNotification from '@Root/Hooks/notification';

const NotificationsHandler: React.FC = (): JSX.Element => {
  const { props } = usePage();
  const notify = useNotification();

  useEffect(() => {
    const handleNotifications = () => {
      const errorsObj = Object.keys(props.errors);
      const hasNotifications = errorsObj.length > 0;

      if (!hasNotifications) {
        return;
      }

      errorsObj.map((errorKey) => {
        const message = props.errors[errorKey];

        if (message) {
          notify(message, 'error');
        }
      });
    };

    handleNotifications();
  }, [notify, props.errors]);

  return <React.Fragment />;
};

export { NotificationsHandler };
