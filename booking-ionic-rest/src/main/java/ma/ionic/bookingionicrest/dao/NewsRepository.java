package ma.ionic.bookingionicrest.dao;

import ma.ionic.bookingionicrest.entities.News;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*") @RepositoryRestResource
public interface NewsRepository extends JpaRepository<News, Long> {
}
