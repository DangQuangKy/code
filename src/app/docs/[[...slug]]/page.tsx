function Docs({params} : {
    params: {
        slug: string[]
    }
}) {
    if (params.slug?.length === 2) {
        return <h1>Viewing Doc: {params.slug[0]} at section: {params.slug[1]}</h1>
    }
    if (params.slug?.length === 1) {
        return <h1>Viewing Doc: {params.slug[0]}</h1>
    }
    return ( 
        <div>
            <h1>This is Docs Page</h1>
        </div>
     );
}

export default Docs;