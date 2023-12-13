package 123.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import 123.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Контрагенты
 */
@Entity(name = "IIS123Контрагенты")
@Table(schema = "public", name = "Контрагенты")
public class Kontragenty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Контрагент")
    private String контрагент;


    public Kontragenty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКонтрагент() {
      return контрагент;
    }

    public void setКонтрагент(String контрагент) {
      this.контрагент = контрагент;
    }


}