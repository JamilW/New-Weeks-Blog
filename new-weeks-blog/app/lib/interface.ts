export interface Post   {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug:   {
        current: string;
    };
    _createdAt: string;
    
    // orderings: [
    //     {
    //         title: "createdAt",
    //         name: "createdAtAsc",
    //         by: [{field: "createdAt", direction: "asc"}] 
    //     }
        
    // ]
}


