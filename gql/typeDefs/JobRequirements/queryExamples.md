query jobRequirement{
  jobRequirement(id: 1){
    id
    name
    job{
      id
    }
  }
}

query jobRequirements{
  jobRequirements{
    id
    name
    job{
      id
    }
  }
}