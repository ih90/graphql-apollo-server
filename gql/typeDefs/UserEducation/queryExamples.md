query userEducation {
  userEducation(id: 1){
    id
    institution
    description
    user{
      id
      username
    }
    startDate
    endDate
  }
}

query userEducations {
  userEducations {
    id
    institution
    description
    user{
      id
      username
    }
    startDate
    endDate
  }
}