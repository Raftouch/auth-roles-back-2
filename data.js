const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic',
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'Rafa', role: ROLE.ADMIN },
    { id: 2, name: 'Lilly', role: ROLE.BASIC },
    { id: 3, name: 'Bob', role: ROLE.BASIC },
  ],
  projects: [
    { id: 1, name: "Rafa's project", userId: 1 },
    { id: 2, name: "Lilly's project", userId: 2 },
    { id: 3, name: "Bob's project", userId: 3 },
  ],
}
