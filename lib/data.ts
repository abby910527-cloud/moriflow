export const stats = [
  { label: '今日營收', value: 'NT$ 28,460', note: '+18%', href: '/finance' },
  { label: '今日訂單', value: '42', note: '待處理 7', href: '/orders' },
  { label: '待出貨', value: '16', note: '需優先處理', href: '/orders?status=待出貨' },
  { label: '熱銷商品', value: '奶油針織外套', note: '本週 128 件', href: '/products/MB-250520-001' }
];

export const orders = [
  { id: 'MF-250520-001', name: '林小姐', phone: '0912-345-678', total: 'NT$1,280', status: '待出貨', date: '2026/05/20', items: ['奶油色針織外套 / 杏色 / M × 1', '文青帆布包 × 1'], address: '台中市西區公益路 100 號', note: '需放入感謝卡' },
  { id: 'MF-250520-002', name: '王小姐', phone: '0988-111-222', total: 'NT$2,450', status: '已付款', date: '2026/05/20', items: ['韓系童裝套裝 / 110cm × 2'], address: '新北市板橋區文化路 88 號', note: '等待到貨後一起出貨' },
  { id: 'MF-250519-018', name: '陳小姐', phone: '0977-555-666', total: 'NT$890', status: '已完成', date: '2026/05/19', items: ['文青帆布包 × 1'], address: '高雄市左營區明誠路 22 號', note: '已完成取貨' }
];

export const products = [
  { sku: 'MB-250520-001', name: '奶油色針織外套', stock: 38, price: 'NT$790', category: '女裝', cost: 'NT$420', status: '上架中' },
  { sku: 'KD-250520-002', name: '韓系童裝套裝', stock: 12, price: 'NT$980', category: '童裝', cost: 'NT$560', status: '低庫存' },
  { sku: 'BG-250518-003', name: '文青帆布包', stock: 54, price: 'NT$520', category: '配件', cost: 'NT$260', status: '上架中' }
];

export const expenses = [
  { id: 'EX-001', payer: 'Abby', category: '進貨', amount: 'NT$ 12,400', date: '2026/05/20' },
  { id: 'EX-002', payer: '小幫手 A', category: '物流', amount: 'NT$ 3,680', date: '2026/05/19' },
  { id: 'EX-003', payer: '小幫手 B', category: '包材', amount: 'NT$ 2,150', date: '2026/05/18' }
];
