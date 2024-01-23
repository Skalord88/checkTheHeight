package highPerson.height.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import highPerson.height.entity.Persona;
import highPerson.height.repository.PersonaRepository;

@Service
public class PersonaService {

    private final PersonaRepository personaRepository;

    @Autowired
    public PersonaService(PersonaRepository personaRepository) {
        this.personaRepository = personaRepository;
    }

    public List<Persona> allPersona() {
        return personaRepository.findAll();
    }

    public void addPersona(Persona persona) {
        personaRepository.save(persona);
    }

    public List<Persona> sortPersona() {

        List<Persona> personaList = personaRepository.findAll();

        List<Persona> listResult = personaList.stream()
                .sorted((p1, p2) -> Double.compare(p2.getHigh(), p1.getHigh()))
                .toList();

        return listResult;
    }
}
