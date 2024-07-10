package org.dsi.keriback.repository;

import org.dsi.keriback.Entity.Aids;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AidRepository extends JpaRepository<Aids, Integer> {
     Optional<Aids> findByName(String name);
}
