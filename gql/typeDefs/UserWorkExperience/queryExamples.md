query userWorkExperience {
  userWorkExperience(id: 1){
    id
    institution
    user{
      username
      firstName
    }
  }
}

query userWorkExperiences {
  userWorkExperiences{
    id
    institution
    user{
      username
      firstName
    }
  }
}

query userWorkExperience {
  userWorkExperience(id: 1) {
    id
    institution
    description
    startDate
    endDate
  }
}

query userWorkExperiences {
  userWorkExperiences {
    id
    institution
    user{
      username
      firstName
    }
  }
}

mutation updateUserWorkExperience {
  updateUserWorkExperience(id: 1, institution: "Modus", description: "Digital Transformation"){
    id
  }
}

mutation createUserWorkExperience {
  createUserWorkExperience(institution: "bew", description: "fancy", userId: 1){
    id
    institution
    description
    user{
      id
    }
    startDate
    endDate
  }
}

mutation deleteUserWorkExperience {
  deleteUserWorkExperience(id: 4) 
}

mutation deleteUserWorkExperiences {
  deleteUserWorkExperiences(ids: [5, 6]) 
} username
      firstName
    }
