package ma.ionic.bookingionicrest.web;

import ma.ionic.bookingionicrest.entities.Book;
import ma.ionic.bookingionicrest.service.IMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.*;

@RestController @CrossOrigin("*")
public class BookRestControler {
    @Autowired
    private IMetier metier;

   /* @GetMapping(path = "/booksPage/{page,size}")
    Page<Book> getAllBook(Pageable pageable){
        return
    }*/

    @PostMapping(path = "/ajouterBook")
    public Book addBook(@RequestBody Book book){
        return metier.ajouterBook(book);
    }

    @DeleteMapping(path = "/supprimerBook/{id}")
    public void deleteBook(@PathVariable("id") Long id){
        metier.supprimerBook(id);
    }
    @PutMapping(value = "/modifierBook/{id}")
    public Book updateProduit(@PathVariable("id") Long id, @RequestBody Book book){
        return metier.modifierBook(id,book);
    }
}
