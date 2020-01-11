package ma.ionic.bookingionicrest.service;

import ma.ionic.bookingionicrest.entities.Book;
import ma.ionic.bookingionicrest.entities.News;

import java.util.List;

public interface IMetier {
   // Page<Book> pageableBooks(Pageable pageable);
    List<Book> recupererAllBooks();
    Book ajouterBook(Book book);
    News ajouterNews(News news);
    List<News> recupererAllNews();
    void supprimerBook(Long id);
    Book modifierBook(Long id, Book book);
}
