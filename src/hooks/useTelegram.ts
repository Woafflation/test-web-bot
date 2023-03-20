const tg = window?.Telegram?.WebApp || {
  close() {},
  ready() {},
  initDataUnsafe: {},
};

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  return {
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
}
