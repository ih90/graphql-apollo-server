query skill{
  skill(id: 3){
    id
    name
  }

query skills{
  skills{
    id
    name
  }
}

mutation create{
  createSkill(name: "test"){
    id
    name
  }
}

mutation update{
  updateSkill(id: 11,name: "new dumb test"){
    id
    name
  }
}

mutation deleteSkill{
  deleteSkill(id: 10)
}

mutation deleteSkills{
  deleteSkills(ids: [9, 10])
}