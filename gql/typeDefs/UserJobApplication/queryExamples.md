query userJobApplication{
  userJobApplication(id: 1){
    id
    job{
      name
    }
    user{
      firstName
    }
    isAccepted
  }
}

query userJobApplications{
  userJobApplications{
    id
    job{
      name
    }
    user{
      firstName
    }
    isAccepted
  }
}