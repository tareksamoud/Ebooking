package ma.ionic.bookingionicrest.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.List;

@Entity @Data
@AllArgsConstructor @NoArgsConstructor @ToString
public class Book implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String isbn;
    private int nombrPage;
    private String datePublication;
    private String imagePath;
    private String shortDescription;
    private String longDescription;
    private String status;
    private String authors;
    private String categories;
    private int rating;

}
