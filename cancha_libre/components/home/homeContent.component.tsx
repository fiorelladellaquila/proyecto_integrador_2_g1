import { Box, Button, Grid, TextField, Typography  } from "@mui/material";
import Image from 'next/image';
import { FC } from "react";
import GeneralFooter from "../layouts/footer/general-footer.component";

const HomeContent: FC = () => {
  return (
    <>
      <Box sx={{ position: 'relative', width:'100%', margin: 'auto' }}>
      {/* Contenido que estará sobre la imagen */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20px',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <Typography variant="h4" color="#fff" mt={4}>
          Vení a darlo todo por tu equipo.
        </Typography>
        <Box textAlign="center" mt={2}>
          <Button variant="contained"  sx={{ backgroundColor: '#00CC00' }}>
            ¡Reserva ahora!
          </Button>
        </Box>
        <Box sx={{display: 'flex', gap: '10px', alignContent: 'center', justifyContent: 'center'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="60" viewBox="0 0 1025 1024"><path fill="#F2F2F2" d="M557.976 590q-18 18-45 18t-45-18l-448-452q-19-19-19-46t19-45l26-28q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 28q19 18 19 45t-19 46zm-512-155q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 27q19 19 19 45.5t-19 45.5l-448 452q-18 19-45 19t-45-19l-448-452q-19-19-19-45.5t19-45.5z"/></svg>
          <Typography variant="body2" color="#fff" mt={2}>
            ...o conocenos primero.
          </Typography>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="60" viewBox="0 0 1025 1024"><path fill="#F2F2F2" d="M557.976 590q-18 18-45 18t-45-18l-448-452q-19-19-19-46t19-45l26-28q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 28q19 18 19 45t-19 46zm-512-155q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 27q19 19 19 45.5t-19 45.5l-448 452q-18 19-45 19t-45-19l-448-452q-19-19-19-45.5t19-45.5z"/></svg>
        </Box>
      </Box>
      <Image src="/teamHome.png" alt="Tu imagen" layout="responsive" width={1} height={1} />
    </Box>
    <Box>
        <Typography variant="h4" color="#3A3A3A" textAlign="center" mt={4}>
        COMPLEJO DEPORTIVO CANCHA LIBRE
      </Typography>
      <Typography variant="h5" color="#787B81" textAlign="center" mt={2}>
        Deportes + Recreación
      </Typography>

      {/* Contenedor con Texto y Cuatro Imágenes */}
      <Grid container mt={4} spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Texto en el lado izquierdo */}
          <Typography variant="body1" color="#787B81" paddingBottom={2} paddingRight={5} paddingLeft={5}>
          Disfrutá de un predio extraordinario, ubicado en pleno centro de Córdoba, a pasos de la Av. Colón.
          </Typography>
          <Typography variant="body1" color="#787B81"paddingBottom={2} paddingRight={5} paddingLeft={5}>
          Te ofrecemos las mejores canchas de fútbol 5, 7, 8, 9 y 11 con césped sintético de última generación, además de exclusivos servicios adicionales para que tu experiencia sea única.
          </Typography>
          <Typography variant="body1" color="#787B81" paddingBottom={2} paddingRight={5} paddingLeft={5}>
          Nuestro sistema de reservas te permite saber de antemano qué turnos están disponibles en vivo y en directo para cada cancha para que puedas organizarte mejor. Sólo tenés que crearte una cuenta o iniciar sesión para hacer la reserva. 
          </Typography>
          <Typography variant="body1" color="#787B81" paddingBottom={2} paddingRight={5} paddingLeft={5}>
          Además, con el alquiler de cualquiera de nuestras canchas podés utilizar el sector de parrillas absolutamente sin cargo.
          </Typography>
          <Typography variant="body1" color="#787B81" paddingBottom={2} paddingRight={5} paddingLeft={5}>
          Contamos con seguridad y personal médico presente en el complejo las 24 hs.  
          </Typography>
        </Grid>
        <Grid container item xs={12} md={6} spacing={2} >
          {/* Cuatro imágenes en el lado derecho */}
          {['cancha_1', 'cancha_2', 'cancha_3', 'cancha_4'].map((index) => (
            <Grid item xs={6} key={index}>
              <Image src={`/${index}.jpg`} alt={`Imagen ${index}`} layout="responsive" width={1} height={1} objectFit="cover" style={{ width: '100%', height: '100%' }}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
    {/* NUESTRAS CANCHAS */}
    <Box sx={{ backgroundColor: '#0A711B', padding: '3rem 0 8rem 0', marginTop: '2rem', textAlign: 'center' }}>
        <Typography variant="h4" color="#FFFFFF" sx={{ borderBottom: '3px solid #FFFFFF', margin: '0 auto 16px auto', display: 'inline-block' }}>
          NUESTRAS CANCHAS
        </Typography>
        <Typography variant="h6" color="#FFFFFF" textAlign="center" marginBottom={'3rem'}>
          Valores a Noviembre 2023
        </Typography>

        <Grid container justifyContent="center" spacing={1} style={{padding:'0 5rem'}}>
          {[
            { id: 1, teamNumber: '5', price: '15.000', img: '' },
            { id: 2, teamNumber: '7-8', price: '21.000', img: '' },
            { id: 3, teamNumber: '9', price: '27.000', img: '' },
            { id: 4, teamNumber: '11', price: '33.000', img: '' },
          ].map((card) => (
            <Grid item container key={card.id} justifyContent="center" xs={12} sm={6} md={4} lg={3} style={{borderRadius: '2rem'}}>
              <Box sx={{ backgroundColor: '#FFFFFF', textAlign: 'center', width: '100%' }}>
                <Box sx={{ backgroundColor: '#222222' }}>
                  <Typography variant="h6" color="#FFFFFF" padding="1rem 0">
                    Fútbol {card.teamNumber}
                  </Typography>
                </Box>
                <Box sx={{ backgroundColor: '#333333', color: '#FFFFFF' }}>
                  <Typography padding="0.5rem 0 0.2rem 0">
                    Hora
                  </Typography>
                  <Typography variant="h3" padding="0.5rem 0 0.2rem 0" display= 'flex' justifyContent='center'>
                    <span style={{ fontSize: '1rem', padding: '1rem' }}>$</span>{card.price}
                  </Typography>
                  <Typography padding="0.5rem 0 1rem 0" fontWeight={'bold'}>
                    Antes de las 18 hs.
                  </Typography>
                </Box>
                <Box>
                  <Typography padding="1rem 0 0.2rem 0" fontSize='0.9rem'>
                    Alquiler de cancha por una hora
                  </Typography>
                  <Typography padding="0.5rem 0 0.2rem 0" fontSize='0.9rem'>
                    Acceso a sector de parrillas
                  </Typography>
                  <Typography padding="0.5rem 0 1rem 0"  fontSize='0.9rem' fontWeight={'bold'}>
                    Adicional nocturno $5.000
                  </Typography>
                </Box>
                <Button variant="contained" sx={{ backgroundColor: '#00CC00', width: '100%' }}>
                  Reservá
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* EVENTOS RECREATIVOS */}
      <Box sx={{ backgroundColor: '#FFFFFF', padding: '3rem 0 3rem 0', textAlign: 'center' }}>
        <Typography variant="h4" color="#3A3A3A" sx={{ borderBottom: '3px solid #3A3A3A', margin: '0 auto 16px auto', display: 'inline-block' }}>
          EVENTOS RECREATIVOS
        </Typography>
        <Typography variant="h6" color="#787B81" textAlign="center" marginBottom={'3rem'}>
          Valores a Noviembre 2023
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', textAlign: 'center' }}>
              <Image src={`/cumpleInfantil.png`} alt={'Imagen'} layout="responsive" width={500} height={700} objectFit="cover" style={{ width: '100%', height: '100%' }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Typography variant="h5" color="#3A3A3A" textAlign="center" fontWeight="bold" marginBottom='1rem'>
                FESTEJÁ TU CUMPLEAÑOS
              </Typography>
              <Typography color="#666666" padding='1rem'>
                En el Complejo tenemos diferentes opciones para que pases un día inolvidable. Contamos con amplio sector de quinchos y parrillas aptos para cualquier evento, asistencia médica y seguridad las 24 hs. en el predio.
              </Typography>
              <Grid container spacing={2} justifyContent="center" style={{ padding: '0 1rem' }}>
                {[
                  { id: 1, promoNumber: '15', price: '84.000', members: '15', food: { panchos: '15', drink: '10', additionalPerHamburguer: '10.500' }, time: '2', additionalPerBoy: '5.500', additionalPerTeam: '15.000' },
                  { id: 2, promoNumber: '25', price: '140.000', members: 25, food: { panchos: '25', drink: '15', additionalPerHamburguer: '15.500' }, time: '2', additionalPerBoy: '5.500', additionalPerTeam: '15.000' },
                ].map((card) => (
                  <Grid item key={card.id} xs={12} sm={6} md={6} lg={6}>
                    <Box sx={{ backgroundColor: '#FFFFFF', textAlign: 'center', width: '100%' }}>
                      <Box sx={{ backgroundColor: '#222222' }}>
                        <Typography variant="h6" color="#FFFFFF" padding="1rem 0">
                          Promo {card.promoNumber}
                        </Typography>
                      </Box>
                      <Box sx={{ backgroundColor: '#333333', color: '#FFFFFF' }}>
                        <Typography variant="h3" padding="0.5rem 0 0.2rem 0" display='flex' justifyContent='center'>
                          <span style={{ fontSize: '1rem', padding: '1rem' }}>$</span>{card.price}
                        </Typography>
                        <Typography padding="0.5rem 0 1rem 0">
                          Para {card.members} chicos
                        </Typography>
                      </Box>
                      <Box>
                      <Typography padding="1rem 0 0.2rem 0" fontSize='0.9rem'>
                        {card.food.panchos} panchos
                        </Typography>
                        <Typography padding="0.5rem 0 0.2rem 0" fontSize='0.9rem'>
                        Snacks
                        </Typography>
                        <Typography padding="0.5rem 0 0.2rem 0" fontSize='0.9rem'>
                        Sandwiches de miga
                        </Typography>
                        <Typography padding="0.5rem 0 0.2rem 0" fontSize='0.9rem'>
                        {card.food.drink} bebidas grandes
                        </Typography>
                        <Typography padding="0.5rem 0 0.2rem 0" fontSize='0.9rem'>
                        {card.time} horas de cancha F5
                        </Typography>
                        <Typography padding="0.5rem 0 0.2rem 0" fontSize='0.9rem'>
                        Adicional por chico ${card.additionalPerBoy}
                        </Typography>
                        <Typography padding="0.5rem 0 0.2rem 0" fontSize='0.9rem'>
                        Adicional cancha F9 ${card.additionalPerTeam}
                        </Typography>
                        <Typography padding="0.5rem 0 1rem 0"  fontSize='0.9rem' fontWeight={'bold'}>
                        Adicional opción hamburguesas ${card.food.additionalPerHamburguer}
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#00CC00', width: '100%' }}>
                          Consultá
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* CONTACTANOS */}
      <Box sx={{ backgroundColor: '#BDFFBD', padding: '1rem 0 5rem 0', textAlign: 'center' }}>
        <Typography variant="h4" color="#3A3A3A" sx={{ borderBottom: '3px solid #3A3A3A', margin: '0 auto 3rem auto', display: 'inline-block' }}>
          CONTACTANOS
        </Typography>
        <Grid display='flex' >
          <Box margin='1rem' width='100%' >
            {/* Formulario de contacto */}
      <form>
        <Box margin='1rem' width='100%'>
          {/* Input para Nombre */}
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#fff', borderBottom: '3px solid #787B81' }}
          />
        </Box>
        <Box margin='1rem' width='100%'>
          {/* Input para Correo Electrónico */}
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#fff', borderBottom: '3px solid #787B81' }}
          />
        </Box>
        <Box margin='1rem' width='100%'>
          {/* Input para Mensaje */}
          <TextField
            label="Mensaje"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ backgroundColor: '#fff', borderBottom: '3px solid #787B81' }}
          />
        </Box>
        <Button variant="contained" sx={{ backgroundColor: '#00CC00' }}>
          Enviar
        </Button>
      </form>
          </Box>
          <Box margin='1rem' width='100%' >
          <Typography color="#3A3A3A" sx={{ margin: '0 auto 3rem auto', display: 'inline-block' }}>
          Te invitamos a conocer el Complejo Deportivo Cancha Libre. Una vez que lo hagas nos vas a elegir para tu próximo partido. 
        </Typography>
          </Box>
        </Grid>
      </Box>
      {/* NOVEDADES */}
      <Box sx={{ backgroundColor: '#0A711B', padding: '1rem', textAlign: 'center' }}>
        <Typography variant="h4" color="#FFFFFF" sx={{ borderBottom: '3px solid #FFFFFF', margin: '0 auto 3rem auto', display: 'inline-block' }}>
          NOVEDADES
        </Typography>
        <Grid container spacing={1}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Grid item xs={6} sm={3} key={index}>
              {/* Cambia la fuente de tus imágenes según sea necesario */}
              <Image src={`/novedad_${index + 1}.png`} alt={`Novedad ${index + 1}`} layout="responsive" width={500} height={700} objectFit="cover" style={{ width: '100%', height: '100%' }} />
            </Grid>
          ))}
        </Grid>
        </Box>
        <GeneralFooter/>
    </>
    

    
  );
};

export default HomeContent;
