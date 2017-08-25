import * as treeshakeable from './lib/treeshakeable';
import untreeshakeable from './lib/untreeshakeable';

treeshakeable.keepMe();

untreeshakeable.keepMe();
