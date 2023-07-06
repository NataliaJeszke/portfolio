type Project ={
    id?: number,
    name: string,
    technologies: string,
    description: string,
    imageUrl: string,
    githubUrl: string,
    liveUrl: string,
}

type ProjectRecordGH = {
    id: string,
    name: string,
    html_url: string,
    homepage: string,
    description: string,
    technologies: string,
    language: string
}

type ProjectDescription = {
    image: string | StaticImport
    technologies?: string,
    description?: string,
}