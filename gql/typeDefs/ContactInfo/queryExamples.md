query contact {
  contactInfo(id: 2){
    id
    email
    phone
    city
    country{
      id
      name
    }
    website
    avatarUrl
    about
  }
}

query contactInfos {
  contactInfos{
    id
    email
    phone
    city
    country{
      id
      name
    }
    website
    avatarUrl
    about
  }
}