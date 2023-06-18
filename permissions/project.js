const { ROLE } = require('../data')

// admin can see all projects, the others only their own projcts
// to protect the route /projects/:projestId
function canViewProject(user, project) {
  return user.role === ROLE.ADMIN || project.userId === user.id
}

// to see all projects of the same user
// to protect the route /projects
function scopedProjects(user, projects) {
  if (user.role === ROLE.ADMIN) return projects
  return projects.filter((project) => project.userId === user.id)
}

// only the user who created a project can delete it, not even admin
// to protect the route /projects/:projestId
function canDeleteProject(user, project) {
  return project.userId === user.id
}

module.exports = { canViewProject, scopedProjects, canDeleteProject }
