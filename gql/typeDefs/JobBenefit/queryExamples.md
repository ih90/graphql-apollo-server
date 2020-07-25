query jobBenefit{
  jobBenefit(id: 1){
    id
    name
   	job{
      id
      name
      description
    }
  }
}

query jobBenefits{
  jobBenefits{
    id
    name
   	job{
      id
      name
      description
    }
  }
}