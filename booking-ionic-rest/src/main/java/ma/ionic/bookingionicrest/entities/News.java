package ma.ionic.bookingionicrest.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
@Entity @Data
@ToString @AllArgsConstructor @NoArgsConstructor
public class News implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String auteur;
    private String titre;
    private String shortDescription;
    private String LongDescription;
    private String datePublication;
    private String imagePath;
}
