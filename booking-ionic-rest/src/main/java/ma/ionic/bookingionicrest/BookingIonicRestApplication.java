package ma.ionic.bookingionicrest;

import ma.ionic.bookingionicrest.entities.Book;
import ma.ionic.bookingionicrest.entities.News;
import ma.ionic.bookingionicrest.service.IMetier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;


@SpringBootApplication
public class BookingIonicRestApplication implements CommandLineRunner {
    @Autowired
    private IMetier metier;
    @Autowired
    private RepositoryRestConfiguration restConfiguration;

    public static void main(String[] args) {
        SpringApplication.run(BookingIonicRestApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        restConfiguration.exposeIdsFor(Book.class, News.class);
        /*this.metier.ajouterNews(
                new News(
                        null,
                        "Loïc Duval",
                        "Google veut transformer les VMs en containers",
                        "Comme chaque lundi, InformatiqueNews Hebdo fait le tour de l’actualité de la semaine écoulée en vidéo. Guy Hervier et Jean-François Le Nillias débâtent des sujets chauds du moment et des dernières annonces d’une semaine notamment animée par les conférences d’IBM Cloud à Paris, de Google à Londres et de Salesforce à San Francisco…",
                        " Comme chaque lundi, InformatiqueNews Hebdo fait le tour de l’actualité de la semaine écoulée en vidéo. Guy Hervier et Jean-François Le Nillias débâtent des sujets chauds du moment…,\n",
                        "21-11-2019",
                        "http://localhost:8080/images/google-cloud.jpg"
                )
        );*/


    }
}
