javascript
export const mockUsers = [
  {
    id: 'u1',
    name: 'Иван Петров',
    email: 'student@campus.edu',
    password: '123456',
    avatar: null,
    role: 'student',
  },
];

export const mockItems = Array.from({ length: 30 }).map((_, i) => {
  const categories = ['Электроника', 'Документы', 'Одежда', 'Ключи', 'Книги', 'Другое'];
  const statuses = ['new', 'in_progress', 'completed', 'cancelled'];
  const locations = [
    'Библиотека, 2 этаж',
    'Корпус А, ауд. 312',
    'Столовая кампуса',
    'Спортзал',
    'Общежитие №3',
  ];
  const titles = [
    'Черный рюкзак с ноутбуком',
    'Студенческий билет',
    'Связка ключей с брелком',
    'Наушники AirPods',
    'Синяя куртка',
    'Учебник по матанализу',
];
  return {
    id: `item_${i + 1}`,
    title: titles[i % titles.length] + ` #${i + 1}`,
    description:
      'Обнаружено на скамейке возле входа. Просьба откликнуться владельца или того, кто узнал предмет.',
    category: categories[i % categories.length],
    status: statuses[i % statuses.length],
    location: locations[i % locations.length],
    coordinates: {
      latitude: 55.75 + (Math.random() - 0.5) * 0.02,
      longitude: 37.61 + (Math.random() - 0.5) * 0.02,
    },
    photos: [],
    reporter: {
      name: ['Иван П.', 'Мария С.', 'Алексей К.'][i % 3],
      phone: '+7 (999) ' + String(1000000 + i).slice(0, 7),
    },
    createdAt: new Date(Date.now() - i * 3600000).toISOString(),
    updatedAt: new Date(Date.now() - i * 1800000).toISOString(),
    priority: ['low', 'medium', 'high'][i % 3],
    history: [
      { status: 'new', changedAt: new Date(Date.now() - i * 3600000).toISOString() },
    ],
  };
});
