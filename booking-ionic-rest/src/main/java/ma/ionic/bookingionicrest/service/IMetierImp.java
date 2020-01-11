package ma.ionic.bookingionicrest.service;

import ma.ionic.bookingionicrest.dao.BookRepository;
import ma.ionic.bookingionicrest.dao.NewsRepository;
import ma.ionic.bookingionicrest.entities.Book;
import ma.ionic.bookingionicrest.entities.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IMetierImp implements IMetier{
    @Autowired
    private BookRepository bookRepository;
    @Autowired
    private NewsRepository newsRepository;

    @Override
    public List<Book> recupererAllBooks() {
        return this.bookRepository.findAll();
    }

    @Override
    public Book ajouterBook(Book book) {
        return this.bookRepository.save(book);
    }

    @Override
    public News ajouterNews(News news) {
        return newsRepository.save(news);
    }

    @Override
    public List<News> recupererAllNews() {
        return newsRepository.findAll();
    }

    @Override
    public void supprimerBook(Long id) {
        this.bookRepository.deleteById(id);
    }

    @Override
    public Book modifierBook(Long id, Book book) {
        book.setId(id);
        return bookRepository.save(book);
    }


}
