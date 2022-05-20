using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

//https://www.youtube.com/watch?v=eCbaZixsP-s&t=427s
namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsController : ControllerBase
    {
        private readonly CardDbContext _dbcontext;

        public CardsController(CardDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<IActionResult>GetCards()
        {
            var cards = await _dbcontext.Cards.ToListAsync();
            return Ok(cards);

        }
        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetCard")]
        public async Task<IActionResult> GetCard([FromRoute]Guid id)
        {
            var card = await _dbcontext.Cards.FirstOrDefaultAsync(c=>c.Id==id);
            if (card != null)
                return Ok(card);
            else
                return NotFound("card not Found");
        }
        [HttpPost]
        public async Task<IActionResult> AddCard([FromBody] Card card)
        {
            card.Id = Guid.NewGuid();

            await _dbcontext.Cards.AddAsync(card);
            await  _dbcontext.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCard), card.Id,card);//201  status code given that card is created 
        }
        [HttpPut]
        [Route("{id:guid}")]
        public async Task <IActionResult> UpdateCard([FromRoute] Guid id, [FromBody] Card card)
        {
            var existingcard = await _dbcontext.Cards.FirstOrDefaultAsync(c => c.Id == id);
            if (card != null)
            {
                existingcard.CardHolderName = card.CardHolderName;
                existingcard.CardNumber = card.CardNumber;
                existingcard.ExpiryMonth = card.ExpiryMonth;
                existingcard.ExpiryYear = card.ExpiryYear;
                existingcard.CVC = card.CVC;
                await _dbcontext.SaveChangesAsync ();
                return Ok(existingcard);
                            }
            else
                return NotFound("card not Found");

        }
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCard([FromRoute] Guid id)
        {
            var existingcard = await _dbcontext.Cards.FirstOrDefaultAsync(c => c.Id == id);
            if (existingcard != null)
            {
                _dbcontext.Remove(existingcard);
                await _dbcontext.SaveChangesAsync();
                return Ok(existingcard);
            }
            else
                return NotFound("card not Found");

        }


    }
}
