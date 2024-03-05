[{
    $match: {
        isActive: true
    }
}, {
    $count: "users"
}]


[{
        $group: {
            id: null,
            average: {
                $avg: "$age"
            }
        }
    }]

[{
    $group: {
        id: "$fruit",
        count: {
            $sum: 1
        }
    }
},
{
    $sort: {
        count: -1
    }
}, {
        $limit: 5
    }]


[{
        $group: {
            _id: "$gender",
            count: {
                $sum: 1
            }
        }
    }]

[{
    $group: {
        _id: "$company.location.country",
        count: {
            $sum: 1
        }
    }
}, {
    $sort: {
        count: -1
    }
}, {
        $limit: 1
    }]


[{
        $group: {
            _id: "$eyecolor",
            count: {
                $sum: 1
            }
        }
    }]



[{
    $unwind: "$tags"
}, {
    $group: {
        _id: "$_id"
    },
    NumberOfTags: {
        $sum: 1
    }
}, {
        $group: {
            _id: null,
            average: {
                $avg: "$numberOfTags"
            }
        }
    }]

    
[{
    $match: {
        tags: "enim"
    }
}, {
        $count: "userWithEnim"
    }]


[{
    $match: {
        inactive: false,
        tag: 'valit'
    }
}, {
        $project: {
            name: 1, age: 1
        }
    }]


[{
    $sort: {
        registerd: -1
    }
}, {
        $project: {
            username: 1
        }
    }]


[{
        $group: {
            _id: "$fruit",
            users: { $push: "$name" }
        }
    }]

[{
    $match: {
        "tags.1": "ad"
    }
}, {
        $count: "countdDocuments"
    }]


[{
        match: {
            tags: { $all: ["ad", "id"] }
        }
    }]


[{
    $match: {
        "contry.location": "USA"
    }
}, {
        $group: {
            _id: "company.title",
            userCount: {
                $sum: 1
            }
        }
    }]
























