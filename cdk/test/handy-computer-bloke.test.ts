import * as cdk from 'aws-cdk-lib';
import * as HandyComputerBloke from '../lib/handy-computer-bloke-stack';

test('Resources snapshot agrees', () => {
    const app = new cdk.Stack();
    const stack = new HandyComputerBloke.HandyComputerBlokeStack(app, 'TestStack', {
        domainName: 'example.io'
    });
    // expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
