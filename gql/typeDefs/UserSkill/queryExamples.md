query userSkill{
  userSkill(id: 1){
    id
    user{
      firstName
    }
    skill{
      name
    }
    rating
  }
}

query userSkills{
  userSkills{
    id
    user{
      firstName
    }
    skill{
      name
    }
    rating
  }
}

mutation createUserSkill{
  createUserSkill(userId: 1,skillId: 1, rating: 6){
    id
    user{
      id
    }
    skill{
      id
      name
    }
    rating
  }
}

mutation updateUserSkill {
  updateUserSkill(id: 1, rating: 10){
    id
    rating
  }
}

mutation deleteUserSkill {
  deleteUserSkill(id: 7)
}

mutation deleteUserSkills {
  deleteUserSkills(ids: [7, 6])
}
