import { AppBar, Container, Toolbar } from "@mui/material"

export const  Footer =() =>{
    return (
        <AppBar position="static" style={{backgroundColor: "gainsboro"}}>
          <Container maxWidth="md">
            <Toolbar variant="dense">
              <span className="btn-more font-color">
                © 2022 Krushal Sonani
              </span>
            </Toolbar>
          </Container>
        </AppBar>
    )
}