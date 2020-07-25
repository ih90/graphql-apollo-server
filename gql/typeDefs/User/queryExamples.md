query user {
  user(id: 1){
    id
    username
    firstName
    lastName
    password
    userRole{
      id
      name
    }
    contactInfo{
      email
      phone
    }
  }
}

query users {
  users{
    id
    username
    firstName
    lastName
    password
    userRole{
      id
      name
    }
    contactInfo{
      email
      phone
    }
  }
}