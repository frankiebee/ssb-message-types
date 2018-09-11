function mapTypes(permissionGroups) {
  const groupings = Object.keys(permissionGroups)
  const mappedGroupings = {}
  groupings.forEach(function (key) {
    let mappedGroup = []
    permissionGroups[key].forEach(function (type) {
      if (!groupings.includes(type)) return mappedGroup.push(type)
      mappedGroup = mappedGroup.concat(permissionGroups[type])
    })
    mappedGroupings[key] = mappedGroup
  })
  return mappedGroupings
}

module.exports = mapTypes(require('./permissions-groups.json'))