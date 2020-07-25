query company {
  company(id: 1){
    id
    name
    user{
      username
      firstName
      lastName
    }
    contactInfo{
      email
      phone
      city
    }
  }
}

query companies {
  companies{
    id
    name
    user{
      username
      firstName
      lastName
    }
    contactInfo{
      email
      phone
      city
    }
  }
}