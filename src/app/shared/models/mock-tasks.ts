export var TASKS = [
/*     {   'id':1,
        'title':'Payment on Death',
        'desc': '',
        //'desc': 'An individual with an account or certificate of deposit at a bank can designate a beneficiary who will inherit any money in the account after his or her death.',
        'matIcon': 'drafts_outline',
        'nbrItems': 0,
        'route': '',
        'visible': true
    },
    {   'id':2,
        'title':'Health Savings Account',
        'desc': '',
        //'desc': 'A savings account used in conjunction with a high-deductible health insurance policy that allows users to save money tax-free against medical expense abbreviation HSA.',
        'matIcon': 'local_hospital',
        'nbrItems': 0,
        'route': '',
        'visible': true
    }, */
    {   'id':3,
        'title':'AI-OCR Correction Service',
        'desc': '',
        'matIcon': 'thumbs_up_down',
        'nbrItems': 20,
        'route': 'correction',
        'visible': true
        // 'subTasks': [
        //     {
        //         'id':1,
        //         'title':'Low Confidence Correction Service',
        //         'desc': '',
        //         'matIcon': 'thumbs_up_down',
        //         'nbrItems': 10,
        //         'route': 'lowcorrection',
        //         'visible': true,
        //     },
        //     {
        //         'id': 2,
        //         'title': 'High Confidence Correction Service',
        //         'desc': '',
        //         'matIcon': 'thumbs_up_down',
        //         'nbrItems': 10,
        //         'route': 'highcorrection',
        //         'visible': true
        //     }
        // ]
    },
/*     {   'id': 4,
        'title': 'Search Processing Logs',
        'desc': '',
        'matIcon': 'assignment',
        'nbrItems': 4,
        'route': 'logs',
        'visible': false
    }, */
    {
        'id': 5,
        'title': 'Results Checking Service',
        'desc': '',
        'matIcon': 'search',
        'nbrItems': 30,
        'route': 'results',
        'visible': true,
        'subTasks': [
            {
                'id': 1,
                'title': 'High Confidence Beneficiary Documents',
                'desc': '',
                'matIcon': 'search',
                'nbrItems': 10,
                'route': 'highbeneficiary',
                'visible': true,
            },
            {
                'id': 2,
                'title': 'Low Confidence Beneficiary Documents',
                'desc': '',
                'matIcon': 'search',
                'nbrItems': 10,
                'route': 'lowbeneficiary',
                'visible': true,
            },
            {
                'id': 3,
                'title':'Trust Documents',
                'desc': '',
                'matIcon': 'search',
                'nbrItems': 10,
                'route': 'trustdocuments',
                'visible': true,
            }
        ]
    }
/*     {   'id': 6,
        'title': 'User List',
        'desc': '',
        'matIcon': 'supervisor_account',
        'nbrItems': 10,
        'route': 'userlist',
        'visible': true
    } */
]

