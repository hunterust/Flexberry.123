package 123.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 123.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ЕдиницыИзмер
 */
@Entity(name = "IIS123ЕдиницыИзмер")
@Table(schema = "public", name = "ЕдиницыИзмер")
public class EdinicyIzmer {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ЕдиницаИзмер")
    private String единицаизмер;


    public EdinicyIzmer() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getЕдиницаИзмер() {
      return единицаизмер;
    }

    public void setЕдиницаИзмер(String единицаизмер) {
      this.единицаизмер = единицаизмер;
    }


}