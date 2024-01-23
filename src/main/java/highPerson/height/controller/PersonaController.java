package highPerson.height.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import highPerson.height.entity.Persona;
import highPerson.height.service.PersonaService;


@RestController
@RequestMapping("/persone")
@CrossOrigin
public class PersonaController {

    private final PersonaService personaService;

    @Autowired
    public PersonaController(PersonaService personaService) {
        this.personaService = personaService;
    }

    @GetMapping
    public List<Persona> allPersona() {
        return personaService.allPersona();
    }

    @GetMapping(value = "/sort")
    public List<Persona> sortPersona() {
        return personaService.sortPersona();
    }

    @PostMapping(value = "", consumes = "application/json")
    public void addPersona(@RequestBody Persona persona) {
        personaService.addPersona(persona);
    }

}
