(function() {
    var customersService = function() {
        var customers = [
            {
                id: 1, 
                joined: '2000-12-02', 
                name:'Gurjot', 
                campaing:'Vodafone', 
                site:'Green Park', 
                name:'Gurjot', 
                city:'Chandler', 
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956,
                        campaing:'Vodafone', 
                        site:'Green Park', 
                        location:'Green Park, New Delhi', 
                        duedate: '2014-10-02', 
                        assignedto:'gurjot',
                        status:'missed'

                    },{
                        id: 2,
                        product: 'Shoes',
                        total: 9.9956,
                        campaing:'Vodafone', 
                        site:'Safdarjung', 
                        location:'Safdarjung, New Delhi', 
                        duedate: '2014-10-03', 
                        assignedto:'rahul',
                        status:'pending'

                    },{
                        id: 3,
                        product: 'Shoes',
                        total: 9.9956,
                        campaing:'Vodafone', 
                        site:'Green Park', 
                        location:'Aims, New Delhi', 
                        duedate: '2000-14-02', 
                        assignedto:'eatads',
                        status:'pending'

                    },{
                        id: 4,
                        product: 'Shoes',
                        total: 9.9956,
                        campaing:'Vodafone', 
                        site:'Green Park', 
                        location:'Green Park, New Delhi', 
                        duedate: '2000-14-02', 
                        assignedto:'gaurav',
                        status:'pending'

                    },{
                        id: 5,
                        product: 'Shoes',
                        total: 9.9956,
                        campaing:'Vodafone', 
                        site:'Green Park', 
                        location:'Green Park, New Delhi', 
                        assignedto:'dhruv',
                        duedate: '2000-14-02', 
                        status:'missed'

                    }
                ]
            }, 
            {
                id: 2, 
                joined: '1965-01-25',
                name:'Rahul', 
                campaing:'Airtel', 
                site:'New Delhi', 
                city:'Las Vegas', 
                orderTotal: 19.99,
                orders: [
{
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'Airtel', 
                        site:'Green Park', 
                        location:'Green Park, New Delhi', 
                        duedate: '2014-10-02',
                        assignedto:'dhruv',
                        status:'missed'

                    },{
                        id: 2,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'Airtel', 
                        site:'Safdarjung', 
                        location:'Safdarjung, New Delhi', 
                        duedate: '2014-10-03', 
                        assignedto:'dhruv',
                        status:'pending'

                    },{
                        id: 3,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'Airtel', 
                        site:'Green Park', 
                        location:'Aims, New Delhi', 
                        assignedto:'gurjot',
                        duedate: '2000-14-02', 
                        status:'pending'

                    }
                    ]
            },
            {
                id: 3, 
                joined: '1944-06-15',
                name:'Tina', 
                campaing:'TATA Motors', 
                site:'Bandra, Mumbai', 
                city:'New York', 
                orderTotal:44.99,
                orders: [
{
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'TATA Motors', 
                        site:'Green Park', 
                        assignedto:'rahul',
                        location:'Green Park, New Delhi', 
                        duedate: '2014-10-02', 
                        status:'missed'

                    },{
                        id: 2,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'TATA Motors', 
                        site:'Safdarjung', 
                        assignedto:'rahul',
                        location:'Safdarjung, New Delhi', 
                        duedate: '2014-10-03', 
                        status:'pending'

                    },{
                        id: 3,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'TATA Motors', 
                        site:'Green Park', 
                        location:'Aims, New Delhi', 
                        assignedto:'rahul',
                        duedate: '2000-14-02', 
                        status:'pending'

                    }
                                    ]
            }, 
            {
                id: 4, 
                joined: '1995-03-28',
                name:'Dave', 
                campaing:'Reliance', 
                site:'Andheri, Mumbai', 
                city:'Seattle', 
                orderTotal:101.50,
                orders: [
{
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'Reliance', 
                        site:'Green Park', 
                        location:'Green Park, New Delhi', 
                        duedate: '2014-10-02', 
                        assignedto:'dhruv',
                        status:'missed'

                    },{
                        id: 2,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'Reliance', 
                        site:'Safdarjung', 
                        location:'Safdarjung, New Delhi', 
                        assignedto:'rahul',
                        duedate: '2014-10-03', 
                        status:'pending'

                    },{
                        id: 3,
                        product: 'Shoes',
                        total: 9.9956,
                campaing:'Reliance', 
                        site:'Green Park', 
                        location:'Aims, New Delhi', 
                        duedate: '2000-14-02', 
                        assignedto:'dhruv',
                        status:'pending'

                    }                ]
            }
        ];
        this.getCustomers = function() {
            return customers;
        };
        
        this.getCustomer = function(customerId) {
            for (var i=0,len=customers.length;i<len;i++) {
               if (customers[i].id === parseInt(customerId)) {
                   return customers[i];
               }
            }
            return {};
        };

    };
    
    angular.module('customersApp').service('customersService', customersService);
                                           
}());