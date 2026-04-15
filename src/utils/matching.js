export function filterUsers(users, filters) {
    const { keyword } = filters;
  
    if (!keyword) return users;
  
    return users.filter((user) =>
      user.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }