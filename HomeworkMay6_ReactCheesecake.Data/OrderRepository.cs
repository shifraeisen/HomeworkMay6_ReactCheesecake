using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeworkMay6_ReactCheesecake.Data
{
    public class OrderRepository
    {
        private readonly string _connectionString;

        public OrderRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddOrder(Order o)
        {
            using var context = new OrdersDataContext(_connectionString);
            context.Orders.Add(o);
            context.SaveChanges();
        }
        public List<Order> GetAll()
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.ToList();
        }
        public Order GetById(int id)
        {
            using var context = new OrdersDataContext(_connectionString);
            return context.Orders.FirstOrDefault(o => o.Id == id);
        }
    }
}
