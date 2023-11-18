//package com.grupo1.canchalibre.security;
//
//import com.grupo1.canchalibre.entity.User;
//import com.grupo1.canchalibre.repository.IUserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//
//@Component
//public class AuthenticationConfig implements UserDetailsService {
//    private final IUserRepository userRepository;
//
//    @Autowired
//    public AuthenticationConfig(IUserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        User user = this.userRepository.findByEmail(email);
//        if (user == null) {
//            throw new UsernameNotFoundException("El usuario con email " + email + " no existe");
//        }
//        return user;
//    }
//}
