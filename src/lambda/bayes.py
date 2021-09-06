import numpy as np
import statistics
from math import sqrt, exp, pi

def defClss(data):
    feature = dict()
    for i in range (len(data)):
        value = data[i][-1]
        if value not in feature:
            feature[value] = list()
        feature[value].append(data[i])
    return feature

def mean(num):
    return sum(num)/float(len(num))

def stdev(num):
    return statistics.stdev(num)

def Gprob(x, mean, stdev):
    exponent = exp(-((x-mean)**2 / (2 * stdev**2 )))
    return (1 / (sqrt(2 * pi) * stdev)) * exponent

data = [[3.393533211,2.331273381,0],
	[3.110073483,1.781539638,0],
	[1.343808831,3.368360954,0],
	[3.582294042,4.67917911,0],
	[2.280362439,2.866990263,0],
	[7.423436942,4.696522875,1],
	[5.745051997,3.533989803,1],
	[9.172168622,2.511101045,1],
	[7.792783481,3.424088941,1],
	[7.939820817,0.791637231,1]]

feature = defClss(data)
def ValueOf(param, clss):
    value_of = list()
    for i in range (len(feature[clss])):
        m = feature[clss][i][param] 
        value_of.append(m)
    return value_of

def priorprob(n):
    total = 0
    for i in range (len(feature)):
        total += len(feature[i])
    return len(feature[n]) / total

clss_num = 2
def BayesClf(x, y):
    prob = list()
    for i in range (clss_num):
        x_Prob = Gprob(x, mean(ValueOf(0,i)), stdev(ValueOf(0,i)))
        y_Prob = Gprob(y, mean(ValueOf(1,i)), stdev(ValueOf(1,i)))
        x_y_Prob = x_Prob * y_Prob * priorprob(i)
        prob.append(x_y_Prob)
    return prob

def PredictBC(x, y):
    prob = BayesClf(x,y)
    result = 0
    for i in range (len(prob)):
        if prob[i] > result:
            result = prob[i]
            m = i
    return result, m

#test_class = 0
#print(BayesClf(mean(ValueOf(0,test_class)), mean(ValueOf(1,test_class))))
#print(PredictBC(mean(ValueOf(0,test_class)), mean(ValueOf(1,test_class)))[-1])


