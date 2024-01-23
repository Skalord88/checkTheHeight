package highPerson.height.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import highPerson.height.entity.Persona;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {

}
