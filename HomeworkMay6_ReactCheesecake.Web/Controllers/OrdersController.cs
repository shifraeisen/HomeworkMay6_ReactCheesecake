using HomeworkMay6_ReactCheesecake.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeworkMay6_ReactCheesecake.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly string _connectionString;

        public OrdersController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [HttpPost("Add")]
        public void AddOrder(Order o)
        {
            var repo = new OrderRepository(_connectionString);
            repo.AddOrder(o);
        }
        [HttpGet("GetOrders")]
        public List<Order> GetOrders()
        {
            var repo = new OrderRepository(_connectionString);
            return repo.GetAll();
        }
        [HttpGet("GetOrderByID")]
        public Order GetOrderById(int id)
        {
            var repo = new OrderRepository(_connectionString);
            return repo.GetById(id);
        }
    }
}
