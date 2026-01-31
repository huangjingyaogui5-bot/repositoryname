// インストール時にキャッシュする（オフライン対応）
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// 通知を表示する
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
});