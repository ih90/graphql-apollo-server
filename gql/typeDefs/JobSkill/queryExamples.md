query jobSkill{
  jobSkill(id: 1){
    id
    skill{
      id
      name
    }
    job{
      name
      description
    }
    rating
  }
}

query jobSkills{
  jobSkills{
    id
    skill{
      id
      name
    }
    job{
      name
      description
    }
    rating
  }
}