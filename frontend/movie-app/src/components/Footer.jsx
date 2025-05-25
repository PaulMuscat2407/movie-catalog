import MovieCreationIcon from '@mui/icons-material/MovieCreation';

const Footer = () => (
    <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <MovieCreationIcon className="h-5 w-5 text-primary mr-2" />
              <span className="font-medium text-foreground">MovieDB</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MovieDB. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
);

export default Footer;