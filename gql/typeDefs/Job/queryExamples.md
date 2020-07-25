query job{
  job(id: 1){
    id
    name
    description
    isAvailable
    company{
      id
      name
    }
  }
}

query jobs{
  jobs{
    id
    name
    description
    isAvailable
    company{
      id
      name
    }
  }
}